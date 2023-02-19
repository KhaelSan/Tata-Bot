{ pkgs }: {
	deps = [
	    pkgs.ffmpeg
	    pkgs.git
	    pkgs.imagemagick
	    pkgs.libwebp
    	pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.python3
        pkgs.replitPackages.jest
        pkgs.yarn
	];
}