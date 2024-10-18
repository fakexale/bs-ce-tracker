import type { PageLoad } from "./$types";

type EventType = "progressTrackerEntry";

type Milestone = {
  unlocked: boolean;
  progress: number;
  image: {
    small: {
      title: string;
      path: string;
      width: number;
      height: number;
    };
  };
  label: string;
};

type Tracker = {
  progress: number;
  direction: "vertical" | "horizontal"; // no idea if horizontal exists, but its here
};

export type EventEntry = {
  id: string;
  metadata: {
    id: string;
    publishedAt: string;
    publishedVersion: number;
  };
  targeting: {
    country: [];
    platform: [];
    // assuming this system was inherited from coc
    builderHallLevel: [];
    townHallLevel: [];
    campaignId: string;
    avatarIds: [];
    hideFromYoungPlayer: boolean;
  };
  postDate: string;
  sortDate: string;
  lang: string;
  title: string;
  type: EventType;
  // we dont need these!
  // ctas:
  // backgrounds:
  milestones: Milestone[];
  tracker: Tracker;
};

export const load: PageLoad = async ({ fetch }) => {
  let internalProgress = await fetch("/api/progress");
  let returnedJSON = await internalProgress.json();

  return { event: returnedJSON as EventEntry };
};
