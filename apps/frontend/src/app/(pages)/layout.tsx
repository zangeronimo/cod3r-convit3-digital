import Page from "@/components/template/Page";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  return <Page>{props.children}</Page>;
}
