# ![aurumOS Logo](aurum-logo.png) aurumOS Build Scripts

[![Build and Upload Release](https://github.com/Quanta-OSS/aurum-build-configs/actions/workflows/release.yaml/badge.svg)](https://github.com/Quanta-OSS/aurum-build-configs/actions/workflows/release.yaml)

Welcome to the **aurumOS** build scripts repository. This guide will help you build the aurumOS ISO using Docker.

## Prerequisites

Before you begin, ensure you have the following installed:

- A Unix-like operating system (Linux, macOS)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)

## Cloning the Repository

Clone the repository and navigate to the `archiso` directory:

```sh
git clone https://github.com/yourusername/aurumOS.git
cd aurumOS/archiso
```

## Building the ISO

To build the ISO, run the following commands:

```sh
docker build -t aurumos-builder .
docker run --rm -v $(pwd)/out:/out aurumos-builder
```

The resulting ISO will be located in the `out` directory.

## Troubleshooting

If you encounter any issues, please check the logs in the `logs` directory or open an issue on GitHub.

## Contributing

We welcome contributions! Please fork the repository and submit a pull request.

## License

This project is licensed under the GPL-3.0-1 License. See the [LICENSE](LICENSE) file for details.

Thank you for using aurumOS!