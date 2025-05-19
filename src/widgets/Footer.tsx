import ResponsiveBody from "@/shared/components/Responsive/Body";
import ResponsiveCenter from "@/shared/components/Responsive/Center";

export function Footer() {
  return (
    <ResponsiveBody as="footer" className="mt-24 gap-2">
      <ResponsiveCenter className="p-8 text-center font-serif">
        Edit by Jungheon Lee
      </ResponsiveCenter>
    </ResponsiveBody>
  );
}
