hello.js:
	emcc -o hello.js hello.c -O0 -s WASM=1 -s NO_EXIT_RUNTIME=1 -s EXPORTED_RUNTIME_METHODS=ccall,cwrap
clean:
	rm hello.js hello.wasm