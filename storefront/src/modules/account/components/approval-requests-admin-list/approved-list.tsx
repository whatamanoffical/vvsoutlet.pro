import { listApprovals } from "@lib/data/approvals"
import { Text } from "@medusajs/ui"
import { ApprovalStatusType } from "@starter/types/approval"
import ApprovalCard from "../approval-card"
import ResourcePagination from "../resource-pagination"

export default async function ApprovedApprovalRequestsAdminList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const pageParam = `approvedPage`
  const currentPage = Number(searchParams[pageParam]) || 1
  const limit = 5

  let { carts_with_approvals, count } = await listApprovals({
    status: ApprovalStatusType.APPROVED,
    offset: (currentPage - 1) * limit,
    limit,
  })

  const totalPages = Math.ceil((count || 0) / limit)

  if (carts_with_approvals.length > 0) {
    return (
      <div className="flex flex-col gap-y-4 w-full">
        <div className="flex flex-col gap-y-2">
          {carts_with_approvals.map((cartWithApprovals) => (
            <ApprovalCard
              key={cartWithApprovals.id}
              cartWithApprovals={cartWithApprovals}
              type="admin"
            />
          ))}
        </div>

        {totalPages > 1 && (
          <ResourcePagination
            totalPages={totalPages}
            currentPage={currentPage}
            pageParam={pageParam}
          />
        )}
      </div>
    )
  }

  return <Text>No requests</Text>
}
