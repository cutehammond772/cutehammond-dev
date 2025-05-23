import { AlertTriangleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function NoScriptAlert() {
  return (
    <noscript>
      <Alert>
        <AlertTriangleIcon />
        <AlertTitle>JavaScript가 비활성화 상태입니다.</AlertTitle>
        <AlertDescription>
          로딩 상태가 지속되는 경우, 새로고침을 수행해주세요.
        </AlertDescription>
      </Alert>
    </noscript>
  );
}
