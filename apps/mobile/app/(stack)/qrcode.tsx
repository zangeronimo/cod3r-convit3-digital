import useEvent from "@/data/hooks/useEvent";
import { flex1 } from "@/styles";
import { CameraView } from "expo-camera";
import { useRouter } from "expo-router";

export default function QrCodeView() {
  const { addEventViaQrCode } = useEvent();
  const router = useRouter();
  return (
    <CameraView
      facing="back"
      style={flex1}
      onBarcodeScanned={({ data }) => {
        addEventViaQrCode(data);
        router.back();
      }}
    />
  );
}
