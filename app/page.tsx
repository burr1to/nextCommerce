import { Button } from "@/components";
import Product from "./product/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <Link href='/product'>
        <Button containerStyles='cursor-pointer' title='Go to Product Page' />
      </Link>
    </div>
  );
}
