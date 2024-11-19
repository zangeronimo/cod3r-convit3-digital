import { use } from "react";

export default function PageConvite(props: any) {
  const params: any = use(props.params);
  return (
    <div>
      <span>{params.alias}</span>
    </div>
  );
}
