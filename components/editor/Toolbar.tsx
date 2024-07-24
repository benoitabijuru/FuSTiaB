"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Image,
  Video,
  Link2Icon
} from "lucide-react";
import './styles.scss'
import { BsParagraph } from "react-icons/bs";

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor, content }: Props) => {
  const [height, setHeight] = React.useState(480)
  const [width, setWidth] = React.useState(640)
 
  if (!editor) {
    return null;
  }
  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border border-gray-700"
    >
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap ">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? "bg-black text-white p-2 rounded-lg"
            : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? "bg-black text-white p-2 rounded-lg"
            : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-black text-white p-2 rounded-lg"
              : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? "bg-black text-white p-2 rounded-lg"
            : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {e.preventDefault(); 
            editor.chain().focus().setParagraph().run()}}
          className={editor.isActive('paragraph') ?  "bg-black text-white p-2 rounded-lg"
            : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
        >
         <BsParagraph className="w-5 h-5"/>
        </button>
       
        <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
        className={editor.isActive('heading', { level: 1 }) ? "bg-black text-white p-2 rounded-lg"
        : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
      >
        <Heading1 className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        className={editor.isActive('heading', { level: 2 }) ?  "bg-black text-white p-2 rounded-lg"
        : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
      >
        <Heading2 className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 3 }).run();
        }}
        className={editor.isActive('heading', { level: 3 }) ? "bg-black text-white p-2 rounded-lg"
        : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
      >
        <Heading3 className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 4 }).run();
        }}
        className={editor.isActive('heading', { level: 4 }) ? "bg-black text-white p-2 rounded-lg"
        : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
      >
        <Heading4 className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 5 }).run();
        }}
        className={editor.isActive('heading', { level: 5 }) ? "bg-black text-white p-2 rounded-lg"
        : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
      >
        <Heading5 className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 6 }).run();
        }}
        className={editor.isActive('heading', { level: 6 }) ? "bg-black text-white p-2 rounded-lg"
        : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
      >
        <Heading6 className="w-5 h-5" />
      </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={editor.isActive('bulletList') ? "bg-black text-white p-2 rounded-lg"
            : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}

        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={editor.isActive('orderedList') ? "bg-black text-white p-2 rounded-lg"
            : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg" }
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={editor.isActive('blockquote') ? "bg-black text-white p-2 rounded-lg"
            : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
        >
          <Quote className="w-5 h-5" />
        </button>
        <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleCode().run();
        }}
        
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? "bg-black text-white p-2 rounded-lg"
          : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
       >
        <Code className="w-5 h-5" />
      </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-black text-white p-2 rounded-lg"
              : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
          className={
            editor.isActive("redo")
              ? "bg-black text-white p-2 rounded-lg"
              : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Redo className="w-5 h-5" />
        </button>
        <button onClick={(e) =>{e.preventDefault();
          editor.chain().focus().setHorizontalRule().run()}} 
          className={editor.isActive({ textAlign: 'left' }) ? "bg-black text-white p-2 rounded-lg"
                : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
          >
        Hr
      </button>
      <button onClick={(e) =>{e.preventDefault(); 
        editor.chain().focus().setHardBreak().run()}}
        className={editor.isActive({ textAlign: 'left' }) ? "bg-black text-white p-2 rounded-lg"
                : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
        >
        br
      </button>
      <button onClick={(e) => {
          e.preventDefault();
          const url = window.prompt('URL')

          if (url) {
            editor.chain().focus().setImage({ src: url }).run()
          }
        }}
        className={editor.isActive({ textAlign: 'left' }) ? "bg-black text-white p-2 rounded-lg"
                : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
      
      >
        <Image className="w-5 h-5" />
        
      </button>
      <button onClick={(e)=>{
            e.preventDefault();
            const url = window.prompt('Enter YouTube URL')
            if (url) {
              editor.commands.setYoutubeVideo({
                src: url,
                width: Math.max(320, parseInt(width, 10)) || 640,
                height: Math.max(180, parseInt(height, 10)) || 480,
              })
            }
          }}
          className={editor.isActive({ textAlign: 'left' }) ? "bg-black text-white p-2 rounded-lg"
                : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}>
      
          <Video className="w-5 h-5" />
        </button>
        <button onClick={(e)=>{
            e.preventDefault();
            const previousUrl = editor.getAttributes('link').href
            const url = window.prompt('URL', previousUrl)
            if (url) {
              editor.commands.setLink({ href: url })
              
            }
          }}
          className={editor.isActive('link') ? "bg-black text-white p-2 rounded-lg"
                : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}>
      
          <Link2Icon className="w-5 h-5" />
        </button>



         <button
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().setTextAlign('left').run();
              }}
              disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
              }
              className={editor.isActive({ textAlign: 'left' }) ? "bg-black text-white p-2 rounded-lg"
                : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}

              
              >
        left
      </button>
      <button 
              onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().setTextAlign('center').run();
              }}
              disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
              }
              className={editor.isActive({ textAlign: 'center' }) ? "bg-black text-white p-2 rounded-lg"
                : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}

              >
        center
      </button>
      <button onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().setTextAlign('right').run();
              }}
              disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
              }
              className={editor.isActive({ textAlign: 'right' }) ? "bg-black text-white p-2 rounded-lg"
                : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
>
        right
      </button>

      <button onClick={(e) => {
                e.preventDefault();
                editor.chain().focus().setTextAlign('justify').run();
              }}
              disabled={
                !editor.can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
              }
              className={editor.isActive({ textAlign: 'justify' }) ? "bg-black text-white p-2 rounded-lg"
                : "text-black hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"}
>
        justify
      </button> 
      </div>
      <div>
      <input
        type="color"
        onInput={event => editor.chain().focus().setColor(event.target.value).run()}
        value={editor.getAttributes('textStyle').color}
        data-testid="setColor"
      />
    </div>
    </div>
  );
};

export default Toolbar;