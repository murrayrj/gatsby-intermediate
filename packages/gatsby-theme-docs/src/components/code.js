/** @jsx jsx */
import { jsx } from 'theme-ui';
import { preToCodeBlock } from 'mdx-utils';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const Code = props => {
    const codeProps = preToCodeBlock(props);

    if (!codeProps) {
        return <pre {...props} />;
    }

    const { codeString, language } = codeProps;

    return (
        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={theme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={className}
                    style={style}
                    sx={{ p: 2, overflowX: 'scroll', variant: 'prism-highlight' }}
                >
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};

export default Code