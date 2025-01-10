import { EllipsisHorizontal, PencilSquare, Trash } from "@medusajs/icons";
import { DropdownMenu, IconButton, toast } from "@medusajs/ui";
import { QueryCompany, QueryEmployee } from "@starter/types";
import { useState } from "react";
import { EmployeesUpdateDrawer } from ".";
import { DeletePrompt } from "../../../../components/common";
import { useDeleteEmployee } from "../../../../hooks/api";

export const EmployeesActionsMenu = ({
  company,
  employee,
  refetch,
}: {
  company: QueryCompany;
  employee: QueryEmployee;
  refetch: () => void;
}) => {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const { mutateAsync: mutateDelete, isPending: loadingDelete } =
    useDeleteEmployee(employee.company_id);

  const handleDelete = async () => {
    await mutateDelete(employee.id, {
      onSuccess: () => {
        toast.success(`Employee deleted successfully`);
        refetch();
      },
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <IconButton variant="transparent">
            <EllipsisHorizontal />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item
            className="gap-x-2"
            onClick={() => setEditOpen(true)}
          >
            <PencilSquare />
            Edit
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item
            className="gap-x-2"
            onClick={() => setDeleteOpen(true)}
          >
            <Trash />
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
      <EmployeesUpdateDrawer
        company={company}
        employee={employee}
        refetch={refetch}
        open={editOpen}
        setOpen={setEditOpen}
        toast={toast}
      />
      <DeletePrompt
        handleDelete={handleDelete}
        loading={loadingDelete}
        open={deleteOpen}
        setOpen={setDeleteOpen}
      />
    </>
  );
};
