install: build
	@mkdir -p ~/.git_template/hooks
	@git config --global init.templatedir ~/.git_template
	@cp prepare-commit-msg ~/.git_template/hooks
	@chmod 0755 ~/.git_template/hooks/prepare-commit-msg 
	@cp -v ./random_emoji /usr/local/bin

build: random_emoji.c
	@gcc ./random_emoji.c -o random_emoji

