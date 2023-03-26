/// <reference types="svelte" />
/// <reference types="vite/client" />

declare global {
  namespace svelte.JSX {
    interface HTMLProps<T> {
      if?: boolean;
    }
  }
}
