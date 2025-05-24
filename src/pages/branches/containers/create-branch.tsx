import { forwardRef } from "react";
import AddBranchIcon from "../../../assets/comps/add-branch";
import { Modal } from "../../../ui/components/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/components/form";
import type { UseFormReturn } from "react-hook-form";
import type { AddBranchType } from "../../../libs/schema/branch";
import { Input } from "../../../ui/components/input";
import { Button } from "../../../ui/components/button";
import CloseIcon from "../../../assets/comps/close-icon";

type Props = {
  close: () => void;
  isOpen: boolean;
  form: UseFormReturn<AddBranchType>;
  onSubmit: (data: AddBranchType) => void;
};

const CreateBranch = forwardRef<HTMLFormElement, Props>(
  ({ close, isOpen, form, onSubmit }: Props, formRef) => {
    return (
      <Modal
        isOpen={isOpen}
        close={close}
        dialogClassName="w-[90%] max-w-[500px] h-4000 max-h-[90vh]"
        shouldPreventUserFromClosing={false}
      >
        <div className="p-4 h-full flex flex-col mb-3">
          <header className="flex items-center h-fit justify-between border-b border-widget-border pb-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="border border-[#EAECF0] rounded-lg p-2 flex items-center justify-center">
                <AddBranchIcon />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Add Branch</h2>
                <p className="text-sm text-table-text">
                  {"Fill in branch details."}
                </p>
              </div>
            </div>
            <Button onClick={close} variant={"plain"}>
              <CloseIcon />
            </Button>
          </header>
          <section className="flex flex-col h-[85%] overflow-y-auto p-2">
            <Form {...form}>
              <form
                ref={formRef}
                className="flex flex-col gap-y-4 w-full"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="w-full flex flex-col gap-3 items-center justify-center ">
                  <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem
                        id={"name"}
                        className="flex flex-col gap-y-1 items-start "
                      >
                        <FormLabel className="font-light">{`Name*`}</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="name"
                            autoCorrect="off"
                            className="bg-white"
                            placeholder="Head Office"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>{t`You can also enter your username.`}</FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="code"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem
                        id={"code"}
                        className="flex flex-col gap-y-1 items-start"
                      >
                        <FormLabel>{`Code*`}</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="000"
                            autoComplete="code"
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

                  <FormField
                    name="address"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem
                        id={"address"}
                        className="flex flex-col gap-y-1 items-start"
                      >
                        <FormLabel>{`address*`}</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="000"
                            autoComplete="address"
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

                  <FormField
                    name="zone"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem
                        id={"zone"}
                        className="flex flex-col gap-y-1 items-start"
                      >
                        <FormLabel>{`zone*`}</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="000"
                            autoComplete="zone"
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

                  <FormField
                    name="area"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem
                        id={"area"}
                        className="flex flex-col gap-y-1 items-start"
                      >
                        <FormLabel>{`Area*`}</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="000"
                            autoComplete="area"
                            className="bg-white"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>
                          Hold <area className="text-xs font-bold">Ctrl</code> to
                          display your password temporarily.
                        </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mt-5 flex items-center justify-center gap-x-4 ">
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="py-[11px] px-4 w-full max-w-[560px] text-white w-fit"
                  >
                    {`Add Branch`}
                  </Button>
                </div>
              </form>
            </Form>
          </section>
        </div>
      </Modal>
    );
  }
);

export default CreateBranch;
