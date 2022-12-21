PATH_NODE_MODULES=./node_modules
PATH_NODE_MODULES_BIN=${PATH_NODE_MODULES}/.bin

# Server ports.
PORT_GATSBY_DEV_SERVER=8080
PORT_GATSBY_STAGING_SERVER=9000

# Install dependencies.
install: install-node-modules disable-gatsby-telemetry

# Install Node dependencies.
install-node-modules:
	@echo "Installing Node dependencies..."
	@npm ci
	@echo "Done installing Node dependencies."

# Runs all linters.
lint: run-eslint

# Runs ESLint.
run-eslint:
	@echo "Running ESLint..."
	@${PATH_NODE_MODULES_BIN}/eslint \
		--config .eslintrc.js \
		--ext .js \
		--ext .jsx \
		--ext .ts \
		--ext .tsx \
		.
	@echo "Done running ESLint."

# Builds a Production version of the project.
build:
	@echo "Building Production version of the project..."
	@${PATH_NODE_MODULES_BIN}/gatsby build
	@echo "Done building Production version of the project"

# Starts the Gatsby development server.
dev:
	@echo "Starting Development server..."
	@${PATH_NODE_MODULES_BIN}/gatsby develop \
		--port ${PORT_GATSBY_DEV_SERVER}

# Starts the staging server.
staging: build
	@echo "Starting Staging server..."
	@${PATH_NODE_MODULES_BIN}/gatsby serve \
		--port ${PORT_GATSBY_STAGING_SERVER}

# Delete generated files.
clean: delete-gatsby-generated-files

# Delete Gatsby generated files.
delete-gatsby-generated-files:
	@echo "Delete Gatsby generated files..."
	@${PATH_NODE_MODULES_BIN}/gatsby clean
	@echo "Done deleting Gatsby generated files."

# Disable Gatsby telemetry.
disable-gatsby-telemetry:
	@echo "Disabling Gatsby telemetry..."
	@${PATH_NODE_MODULES_BIN}/gatsby telemetry \
		--disable
	@echo "Done disabling Gatsby telemetry."