import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "./profile-form";
import { getLoggedInUser } from "@/lib/server/appwrite";

export default async function SettingsProfilePage() {
  const user = await getLoggedInUser();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm user={user} />
    </div>
  );
}
