"use client";

export function applyGoogleTranslatePatch() {
  if (typeof window === "undefined") return;

  try {
    const originalRemoveChild = Node.prototype.removeChild;

    // Use Object.defineProperty instead of direct assignment (more compatible with Turbopack)
    Object.defineProperty(Node.prototype, "removeChild", {
      value: function (this: Node, child: Node) {
        try {
          return originalRemoveChild.call(this, child);
        } catch (err: any) {
          // Ignore only Google Translate related errors
          if (
            err?.message?.includes("Failed to execute 'removeChild'") ||
            err?.message?.includes(
              "The node to be removed is not a child of this node",
            ) ||
            err?.name === "NotFoundError"
          ) {
            console.warn(
              "[Google Translate Patch] Suppressed removeChild error:",
              err.message,
            );
            return child; // Pretend it was removed successfully
          }

          // Re-throw any other unexpected errors
          throw err;
        }
      },
      writable: true,
      configurable: true,
    });

    console.log("[Google Translate Patch] Applied successfully");
  } catch (error) {
    console.error("[Google Translate Patch] Failed to apply patch:", error);
  }
}
