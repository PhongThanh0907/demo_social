import { useLogin } from "@lens-protocol/react-web";

export type LoginWalletProps = {
  wallet: string;
};

export function LoginWallet({ wallet }: LoginWalletProps) {
  const { execute, loading } = useLogin();

  const login = async () => {
    const result = await execute({ address: wallet });

    console.log(result);
    // window.alert(result..message);
  };

  return (
    <button disabled={loading} onClick={login}>
      Log-in
    </button>
  );
}
