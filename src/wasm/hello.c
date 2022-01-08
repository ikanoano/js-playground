#include <stdio.h>
#include <emscripten/emscripten.h>

int main(int argc, char **argv) {
  printf("main called\n");
}

#ifdef __cplusplus
extern "C" {
#endif

// need '-s NO_EXIT_RUNTIME=1 -s EXPORTED_RUNTIME_METHODS="['ccall']"' at compile time to use this func from js
int EMSCRIPTEN_KEEPALIVE myFunction(int argc, char **argv) {
  printf("myFunction called\n");
  return 0;
}

int EMSCRIPTEN_KEEPALIVE plus1(int x) { return x+1; }

#ifdef __cplusplus
}
#endif