import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

type Props = {
  account: string;
  accountId: string;
};

export const AccountColumn = ({ account, accountId }: Props) => {
  const { onOpen: onOpenAccount } = useOpenAccount();

  const onClicnk = () => {
    onOpenAccount(accountId);
  };

  return (
    <div
      onClick={onClicnk}
      className="flex items-center cursor-pointer hover:underline"
    >
      {account}
    </div>
  );
};
