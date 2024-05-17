import { TriangleAlertIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { useOpenTransaction } from "@/features/transactions/hooks/use-open-transaction";

type Props = {
  id: string;
  category: string | null;
  categoryId: string | null;
};

export const CategoryColumn = ({ id, category, categoryId }: Props) => {
  const { onOpen: onOpenCategory } = useOpenCategory();

  const { onOpen: onOpenTransaction } = useOpenTransaction();

  const onClicnk = () => {
    if (categoryId) {
      onOpenCategory(categoryId);
    } else {
      onOpenTransaction(id);
    }
  };

  return (
    <div
      onClick={onClicnk}
      className={cn(
        "flex items-center cursor-pointer hover:underline",
        !category && "text-rose-500"
      )}
    >
      {!category && <TriangleAlertIcon className="size-4 mr-2 shrink-0" />}
      {category || "Uncategorized"}
    </div>
  );
};
