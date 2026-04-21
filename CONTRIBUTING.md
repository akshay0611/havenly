# Contributing to Havenly

First off, thank you for considering contributing to Havenly! We're excited to welcome you to our community. Whether you're fixing a bug, proposing a new feature, or helping us improve our documentation, your contributions are valuable.

We especially welcome contributors during **ELUSOC** and other open-source programs!

## Local Development Setup

Use `SETUP.md` as the canonical setup guide for local development.

## How to Contribute

To ensure a smooth and effective collaboration, please follow these guidelines.

### 1. Opening an Issue

Before starting any work, please open an issue to discuss the changes you'd like to make. This helps us keep track of what's being worked on and avoid duplicate efforts.

- **Check existing issues:** Before creating a new issue, please search our [issues page](https://github.com/akshay0611/havenly/issues) to see if a similar one already exists.
- **Use descriptive titles:** A clear and descriptive title helps us understand the issue at a glance.
- **Apply appropriate labels:** Please use labels to categorize your issue. Good labels to use are:
    - `bug`: For reporting a bug.
    - `feature`: For proposing a new feature.
    - `elusoc`: For issues that are part of ELUSOC.
    - `good first issue`: For issues that are well-suited for beginners.
    - `UI/UX`: For issues related to user interface or user experience.

### 2. Claiming an Issue

To claim an issue, simply comment on it with:

```
I would like to work on this
```

Please wait for a maintainer to assign the issue to you before you start working on it.

### 3. Submitting a Pull Request (PR)

Once you've been assigned an issue and have completed the work, you can submit a pull request.

- **Branch Naming:** Before making changes, create a new branch. **Do not commit directly to `main`**. Use a descriptive branch name, such as `fix/bug-description` or `feature/new-component`.
- **Reference the issue:** Your PR title or description should reference the issue it resolves. For example: `Fix: Property Card Pricing #12`.
- **Include visuals for UI changes:** If your PR involves changes to the user interface, please include screenshots or GIFs to demonstrate the changes.
- **Write clean commit messages:** Follow a consistent style for your commit messages. A good commit message is concise and descriptive.

**Review Process:** All PRs will be reviewed by our maintainers. Please be prepared to make any requested changes before your PR is merged.

#### Before you open a PR

- Make sure the app starts locally (`pnpm dev`) with your changes.
- Run:

    ```sh
    pnpm lint
    pnpm build
    ```

### 4. Coding Standards

To maintain a high-quality codebase, we ask that you follow these coding standards:

- **Follow existing style:** Our project uses Next.js, TypeScript, and Tailwind CSS. Adhere to the coding style and conventions already present in the repository.
- **Keep components modular:** Create small, reusable components wherever possible.
- **Ensure responsiveness:** All UI components should be fully responsive and work on all screen sizes.

### 5. Contributor Etiquette

We value a positive and collaborative environment.

- **Be respectful:** Please be respectful and considerate in all your interactions.
- **No spammy PRs:** Irrelevant or low-effort PRs will be marked as `invalid` or `spam`.

### ⭐ Star Our Repo!

If you enjoy contributing to Havenly or like our project, please consider giving it a ⭐ [star on GitHub](https://github.com/akshay0611/havenly)!

---

Thank you for your contribution! We look forward to building the best rental marketplace with you.
