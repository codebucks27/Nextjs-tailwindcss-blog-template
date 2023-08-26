"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {

  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        const { data, error } = await supabase.rpc("increment", {
          slug_text: slug,
        });

        if (error) {
          console.error("Error incrementing view count:", error);
        }
      } catch (error) {
        console.error(
          "An error occurred while incrementing view count:",
          error
        );
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        const { data, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();

        if (error) {
          console.error("Error fetching view count:", error);
          return;
        }

        setViews(data ? data.count : 0);
      } catch (error) {
        console.error("An error occurred while fetching view count:", error);
      }
    };
    getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};
export default ViewCounter;
