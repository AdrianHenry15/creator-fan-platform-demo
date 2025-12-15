import { Track } from "@/stores/player-store"
type Reward = {
  id: string
  title: string
  description: string
  requiresAchievement: string
}

export const demoArtist = {
  name: "Nova Grey",
  genre: "Alternative / Electronic",
  bio: "Independent artist exploring sound, visuals, and direct fan connection.",
}

export const demoTracks: Track[] = [
  {
    id: "1",
    title: "Lets See What Happens",
    audioUrl: "/audio/lets-see-what-happens.wav",
    duration: "3:12",
    imageUrl: "/images/letsseewhathappens.jpg",
  },
  {
    id: "2",
    title: "Lobby Screen",
    audioUrl: "/audio/lobby-screen.wav",
    duration: "2:48",
    imageUrl: "/images/noticed.jpg",
  },
  {
    id: "3",
    title: "Outside In",
    audioUrl: "/audio/outside-in.wav",
    duration: "3:45",
    imageUrl: "/images/false-claims.jpg",
  },
]

export const demoPosts = [
  {
    id: "p1",
    title: "Studio Session #12",
    locked: true,
  },
  {
    id: "p2",
    title: "Unreleased Chorus Draft",
    locked: true,
  },
]

export const demoRewards: Reward[] = [
  {
    id: "reward-early-track",
    title: "Early Track Access",
    description: "Listen to unreleased tracks before anyone else.",
    requiresAchievement: "first-play",
  },
  {
    id: "reward-discount-merch",
    title: "Merch Discount",
    description: "10% off exclusive merchandise.",
    requiresAchievement: "supporter",
  },
  {
    id: "reward-exclusive-drop",
    title: "Exclusive Drop",
    description: "Access to members-only content and drops.",
    requiresAchievement: "supporter",
  },
]
