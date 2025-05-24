import type { z } from "zod";
import { loginSchema } from "../../../libs/dto/login";
import { useLogin } from "../../../services/auth/login";
import { useRef } from "react";
import { usePasswordToggle } from "../../../hooks/use-password-toggle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/components/form";
import { Input } from "../../../ui/components/input";
import { Button } from "../../../ui/components/button";
import { InputAvatar, InputPadlock, InputShow } from "../../../assets/comps";
import { lapoLogo, loginCard } from "../../../assets/png";
import { Checkbox } from "../../../ui/components/checkbox";
import { Label } from "../../../ui/components/label";

type FormValues = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const { login } = useLogin();

  const formRef = useRef<HTMLFormElement>(null);
  usePasswordToggle(formRef);

  const form = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { identifier: "", password: "", rememberMe: true },
  });

  // const user = useAppSelector((state) => state.auth.user);

  const onSubmit = async (data: FormValues) => {
    try {
      await login(data);
    } catch {
      form.reset();
    }
  };
  return (
    <div className=" h-[calc(100vh_-_0px)] relative">
      <img
        src="/coarse-auth-bg.png"
        alt=""
        className="opacity-15 inset-0 absolute w-full z-0 h-full object-cover"
      />
      <div className="absolute inset-0 flex md:flex-row flex-col gap-4 p-[20px]   bg-cover bg-no-repeat bg-center">
        <section className="flex w-full h-full justify-center ">
          <div className="flex flex-col justify-between w-full h-full max-w-[560px] ">
            <img
              src={lapoLogo}
              width={138.5}
              height={45}
              className="-ml-[18px]"
            />
            <Form {...form}>
              <form
                ref={formRef}
                className="flex flex-col gap-y-4 w-full"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="w-full flex flex-col items-center justify-center ">
                  <div className="flex flex-col gap-y-3 w-full mb-10">
                    <h2 className="text-2xl font-medium">
                      {"Hi, Welcome Back!"}
                    </h2>
                    <p>{"Please sign in using your credentials."}</p>
                  </div>
                  <FormField
                    name="identifier"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem
                        id={"identifier"}
                        className="flex flex-col gap-y-1 items-start mb-7"
                      >
                        <FormLabel className="font-light">{`Username`}</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="username"
                            autoCorrect="off"
                            className="bg-white"
                            placeholder="Enter your username"
                            type="text"
                            leftIcon={<InputAvatar />}
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>{t`You can also enter your username.`}</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="password"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem
                        id={"password"}
                        className="flex flex-col gap-y-1 items-start"
                      >
                        <FormLabel>{`Password`}</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            autoComplete="password"
                            placeholder="Enter your password"
                            leftIcon={<InputPadlock />}
                            rightIcon={<InputShow />}
                            className="bg-white"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>
                  Hold <code className="text-xs font-bold">Ctrl</code> to
                  display your password temporarily.
                </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="w-full">
                    <Button
                      variant={"plain"}
                      className="p-0 font-normal text-[#121212]"
                    >
                      {"Forgot password"}
                    </Button>
                  </div>

                  <div className="w-full flex gap-1 mt-6">
                    <Checkbox
                      id="rememberMe"
                      // checked={form.getValues("rememberMe")}
                      onCheckedChange={(checked) => {
                        form.setValue("rememberMe", !checked);
                      }}
                    />
                    <Label className="font-normal text-[#161616]">
                      {"Remember Me"}
                    </Label>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-center gap-x-4 ">
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="py-[11px] px-4 w-full max-w-[560px] text-white"
                  >
                    {`Login`}
                  </Button>
                </div>
              </form>
            </Form>

            <p className="text-sm text-[#808080]">{`© 2024 Mercator Technologies Ltd. All rights reserved.`}</p>
          </div>
        </section>

        <section className="w-full h-[calc(100vh_-_55px)]">
          <img
            src={loginCard}
            alt="login card"
            className="object-contain w-full h-[calc(100vh_-_55px)]"
            loading="lazy"
          />
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
