import type { CollectionEntry } from "astro:content";
import type { Locale } from "./config";

export type ProjectEntry = CollectionEntry<"projects">;

export function getProjectLocale(project: ProjectEntry): Locale {
  return project.data.locale;
}

export function getProjectSlug(project: ProjectEntry) {
  return project.data.projectSlug ?? project.slug;
}

export function getLocalizedProjects(projects: ProjectEntry[], locale: Locale) {
  return projects.filter((project) => getProjectLocale(project) === locale);
}

export function sortProjects(projects: ProjectEntry[]) {
  return [...projects].sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}
