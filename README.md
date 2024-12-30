# aurumOS Build Scripts

## Prerequisites

- A Unix-like operating system (Linux, macOS)
- `git` installed
- `docker` installed

## Cloning the Repository

```sh
git clone https://github.com/yourusername/aurumOS.git
cd aurumOS/archiso
```

## Building the ISO

Run the following command to build the ISO using Docker:

```sh
docker build -t aurumos-builder .
docker run --rm -v $(pwd)/out:/out aurumos-builder
```

The resulting ISO will be located in the `out` directory.

## Troubleshooting

If you encounter any issues, please check the logs in the `logs` directory or open an issue on GitHub.