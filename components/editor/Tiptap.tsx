'use client'

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'
import Youtube from '@tiptap/extension-youtube'
import Heading from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'



const Tiptap = ({ onChange, content, setContent }: any) => {
  const handleChange = (newContent: string) => {
          onChange(newContent);
        };
        const editor = useEditor({
          extensions: [
            Underline,
            Document,
            Text,
            Image,
            Dropcursor,
            TextStyle,
            Paragraph.configure({
              HTMLAttributes: {
                class: 'my-custom-paragraph',
              },
            }),
            Heading.configure({
              HTMLAttributes: {
                class: 'my-custom-heading',
              },
            }),
            Color.configure({ types: [TextStyle.name, ListItem.name] }),
           
            // TextStyle.configure({ types: [ListItem.name] }),
            StarterKit.configure({
              bulletList: {
                keepMarks: true,
                keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
              },
              orderedList: {
                keepMarks: true,
                keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
              },
            }),
            TextAlign.configure({
              types: ['heading', 'paragraph'],
          }),
          Highlight,

          Youtube.configure({
            controls: false,
            nocookie: true,
          }),
          Link.configure({
            openOnClick: false,
            autolink: true,
            defaultProtocol: 'https',
          }),
          
        ],

        editorProps: {
          attributes: {
            class:
              "flex flex-col  py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 outline-none",
          },
        },
        onUpdate: ({ editor }) => {
          handleChange(editor.getHTML());
        },
      });
  
  return (
    <div className="w-full ">
      <Toolbar editor={editor} content={content}/>
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;