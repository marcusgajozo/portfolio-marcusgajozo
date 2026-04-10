import { Suspense } from "react";
import { listIconsConstant } from "./constants/list-icons.constant";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof listIconsConstant;
}

export function Icon({ name, ...props }: IconProps) {
  const IconComponent = listIconsConstant[name];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IconComponent {...props} />
    </Suspense>
  );
}
