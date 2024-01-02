import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";

interface ConditionalComponentProps {
  dataStatus: "error" | "success" | "pending";
  component: JSX.Element;
  customLoading?: JSX.Element;
}

export default function ConditionalComponent({ dataStatus, component, customLoading }: ConditionalComponentProps) {
  if (dataStatus === "pending") {
    return customLoading || <LoadingComponent />;
  } else if (dataStatus === "error") {
    return <ErrorComponent />;
  } else {
    return component;
  }
}
