"use client"

import { useModalStore } from "@/stores/modal-store"
import CreateAchievementModal from "./create-achievement-modal"
import CreateRewardModal from "./create-reward-modal"
import CreateDropModal from "./create-drop-modal"
import CreateExclusiveModal from "./create-exclusive-modal"
import RewardDetailsModal from "./reward-details-modal"

export default function ModalRoot() {
  const { type, close, payload } = useModalStore()

  if (!type) return null

  return (
    <>
      {type === "create-achievement" && (
        <CreateAchievementModal onClose={close} />
      )}
      {type === "create-reward" && <CreateRewardModal onClose={close} />}
      {type === "create-drop" && <CreateDropModal onClose={close} />}
      {type === "create-exclusive" && <CreateExclusiveModal onClose={close} />}
      {type === "reward-details" && payload && (
        <RewardDetailsModal reward={payload} onClose={close} />
      )}
    </>
  )
}
