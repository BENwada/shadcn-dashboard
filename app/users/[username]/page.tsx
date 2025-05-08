import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* CONTAINER */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6"></div>
        {/* USER BADGES CONTAINER */}
        <div className="bg-primary-foreground p-4 rounded-lg"></div>
        {/* INFORMATION CONTAINER */}
        <div className="bg-primary-foreground p-4 rounded-lg"></div>
        {/* CARD LIST CONTAINER */}
        <div className="bg-primary-foreground p-4 rounded-lg">
          <CardList title="Recent Transactions" />
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6"></div>
      </div>
    </div>
  );
};

export default SingleUserPage;
