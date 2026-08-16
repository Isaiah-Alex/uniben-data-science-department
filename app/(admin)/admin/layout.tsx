import { MockAuthProvider } from "@/lib/mock-auth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MockAuthProvider><div>{children}</div></MockAuthProvider>;
}

