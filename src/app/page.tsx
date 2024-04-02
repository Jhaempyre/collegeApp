'use client'
import Input from "@/components/Input";
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div>
      <h1>Let's start again</h1>
      <Input label="Enter your Email" placeholder="something@anything.com">
      </Input>
      <Input label="Enter your Password" placeholder="Must contain(0-9){speccialsymnol}" type="password">
      </Input>
      <Button className="red" onClick={() => console.log('Button clicked')} >Log In</Button>
      </div>
    </main>
  );
}
