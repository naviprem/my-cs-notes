# Anaconda for Data Science

Today im setting up anoconda on my Mac and i want to capture all the steps involved. Since i do not do data analysis often, this setup feels new everytime i resume work on data analysis. And hence, this effort of take notes so i dont have to scramble next time around.

## What is anaconda?

It is a package manager and environment nanager, Like NPM for javascript world.
It has a collection of over 7500+ open source packages

## Steps to install Anoconda on MacOS

1. Download homebrew.
2. Install package via homebrew.
3. Setup the environment path.

## What is a virtual environment in python?

A virtual environment is a named, isolated, working copy of Python that that maintains its own files, directories, and paths so that you can work with specific versions of libraries or Python itself without affecting other Python projects. Virtual environmets make it easy to cleanly separate different projects and avoid problems with different dependencies and version requiremetns across components. 

## How to create a virtual environment?

### In vanila phthon installation

- Use `virtualenv` tool
- Or use `venv` which is part of python's core language offerings

### If using Anaconda python distribution

- Use the `conda` interface

```bash
$ conda -V
conda 3.7.0
```

```bash
conda update conda
```

```bash
conda create -n yourenvname python=x.x anaconda
```

List Environments

```bash
conda info --envs
```

Activate env to use

```bash
conda activate abc
```

Deactivate Environment

```bash
conda deactivate
```

Clone Environments

```bash
conda create -n a --clone b
```

Delete an environment

```bash
conda remove -n a --all
```
