import { elements } from "./base.js";

export const profileSectionView = () => {
  elements.profileSection.classList.remove("hidden");
  elements.passwordSection.classList.add("hidden");


  elements.profileBtn.classList.add("bg-green-900", "text-white");
  elements.passwordBtn.classList.remove("bg-green-900", "text-white");
  elements.passwordBtn.classList.add("text-gray-700");
}

export const passwordSectionView = () => {
  elements.passwordSection.classList.remove("hidden");
  elements.profileSection.classList.add("hidden");

  elements.passwordBtn.classList.add("bg-green-900", "text-white");
  elements.profileBtn.classList.remove("bg-green-900", "text-white");
  elements.profileBtn.classList.add("text-gray-700");


}