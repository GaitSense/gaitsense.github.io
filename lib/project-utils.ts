import type { Project } from "@/data/projects";

export function getProjectStatusBadges(project: Project) {
  const badges = new Set<Project["status"]>();

  badges.add(project.status);
  project.statusBadges?.forEach((badge) => badges.add(badge));

  if (project.description.toLowerCase().includes("placeholder")) {
    badges.add("Placeholder");
  }

  if (!badges.has("Funded")) {
    badges.add("Student Project");
  }

  return Array.from(badges);
}

export function getProjectGallery(project: Project) {
  return project.gallery?.length ? project.gallery : [project.image];
}
