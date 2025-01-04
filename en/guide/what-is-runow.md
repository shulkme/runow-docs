# What is Runow?


Runow is a front-end template manager designed to simplify the build process of front-end projects. Through Runow, common front-end templates can be quickly applied to help front-end developers build the basic framework and focus on business code.

## Why is it named `Runow` ?

Because after using `create runow`, the selected technology stack template will be automatically downloaded for you, and the corresponding dependencies will be installed. You only need to `npm run dev` to run the project, which reduces the number of `N` things that need to be done before running the project. Of course, `run..now` you can also write less, haha.

## Use Cases

In front-end development, it is very easy to apply the current mainstream technology stack, but before starting a project, unless you have already opened up an existing project, there are infinite `create` and `install` options. Therefore, `runow` emerged, making it easier to choose `create runow` between the simple and cumbersome `create` and `install` options.

It should be noted that `Runow` does not burden future project planning, does not inject too many dependencies and useless features, and focuses more on building the underlying framework. Therefore, it is not conducive to projects that are eager for quick success.

## Compare

### Compared to `Vite`

Anyone who has used `vite` knows that there is a command called `create vite`, and yes, `runow` borrows from the `create vite` command (tribute), so its usage is the same; But there is a difference between the two `Create vite` focuses on showcasing the capabilities of the tool, while `runow` focuses on the application of the template.

- Use `create vite` to quickly create applications built using the `vite` tool.
- Use `create runow` to quickly create applications based on common architecture templates.

### Compared to `Degit`

`degit` is a great branch download tool, `runow` is also based on the ability of `degit` to download remote templates; Using `degit` makes it easy to download code from various code repositories, so the difference between the two is that `degit` is used to download remote branch code, and its purpose is to replace commands such as `git clone`; In addition to downloading remote template code, `runow` also constrains the code scope and simplifies the extraction of target code in template management.