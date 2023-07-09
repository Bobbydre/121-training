import React from "react";
import Link from "next/link";
import Text, { TEXT_TYPE_CLASSES } from "@/snippets/text/text.snippet";
import Form from "@/snippets/form/form.snippet";

export default function Subscribe() {
  const {  normal } = TEXT_TYPE_CLASSES;

  return (
    <div>
      <div className="email-form">
        <Form />
      </div>
      <Text textType="normal">
        Want early access?  <Link href='/'>Learn how</Link> 
      </Text>
    </div>
  );
}
