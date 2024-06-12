import { FC, memo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ReactMarkdown, { Components, Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/atom-one-dark.css';




const components: Components = {
    h1: ({ children }) => <h1 className='text-3xl font-bold'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-2xl font-bold'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-xl font-bold'>{children}</h3>,
    h4: ({ children }) => <h4 className='text-lg font-bold'>{children}</h4>,
    h5: ({ children }) => <h5 className='text-base font-bold'>{children}</h5>,
    h6: ({ children }) => <h6 className='text-sm font-bold'>{children}</h6>,
    p: ({ children }) => <p className='text-base'>{children}</p>,
    a: ({ children, href }) => <a href={href as string} className='text-blue-500'>{children}</a>,
    ul: ({ children }) => <ul className='list-disc list-inside'>{children}</ul>,
    ol: ({ children }) => <ol className='list-decimal list-inside'>{children}</ol>,
    li: ({ children }) => <li className='text-base'>{children}</li>,
    blockquote: ({ children }) => <blockquote className='text-base'>{children}</blockquote>,
    pre: ({ children }) => <pre className='text-base text-wrap break-word whitespace-pre-wrap'>{children}</pre>,
    code(props) {
        const { className, children } = props;
        const language = className?.replace('language-', '') || '';
        return <code className={`text-base ${language}`}>{children}</code>;
    },
    hr: () => <hr className='border-gray-300' />,
    table: ({ children }) => <table className='table-auto'>{children}</table>,
    thead: ({ children }) => <thead className='bg-gray-800'>{children}</thead>,
    tbody: ({ children }) => <tbody className='bg-black'>{children}</tbody>,
    th: ({ children }) => <th className='border border-gray-200 p-2'>{children}</th>,
    td: ({ children }) => <td className='border border-gray-200 p-2'>{children}</td>,
    strong: ({ children }) => <strong className='font-bold'>{children}</strong>,
    em: ({ children }) => <em className='italic'>{children}</em>,
};

const MemoizedReactMarkdown: FC<Options> = memo(
    ReactMarkdown,
    (prevProps, nextProps) =>
        prevProps.children === nextProps.children && prevProps.className === nextProps.className
);

export function RenderMessage({ children }: { children: string }) {
    return (
        <ErrorBoundary fallback={<div className='text-wrap break-word whitespace-pre-wrap'>{children}</div>}>
            <MemoizedReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
                {children}
            </MemoizedReactMarkdown>
        </ErrorBoundary>
    );
}