import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

let firstPaint = true;

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    scrollRestoration: () => {
      if (firstPaint) {
        firstPaint = false;
        return false;
      }
      return true;
    },
    scrollRestorationBehavior: "instant",
  });
}
