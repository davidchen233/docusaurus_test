import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

interface TData {
  value: string
  label: string
  language: string
  mdx: string
}
interface TProps {
  tabValArr: TData[]
}

const TabsComponent = (props: TProps) => {
  const { tabValArr } = props

  return (
    <Tabs>
      {
        tabValArr?.map((item) => (
          <TabItem value={item?.value} label={item?.label} key={item?.value}>
            <CodeBlock language={item?.language}>
              {item?.mdx}
            </CodeBlock>
          </TabItem>
        ))
      }
    </Tabs>
  )
}

export default TabsComponent