import type { MDXComponents } from "mdx/types";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

export default {
  table: (props) => <Table {...props} />,
  thead: (props) => <TableHeader {...props} />,
  tbody: (props) => <TableBody {...props} />,
  tr: (props) => <TableRow {...props} />,
  th: (props) => <TableHead {...props} />,
  td: (props) => <TableCell {...props} />,
  caption: (props) => <TableCaption {...props} />,
} satisfies MDXComponents;
