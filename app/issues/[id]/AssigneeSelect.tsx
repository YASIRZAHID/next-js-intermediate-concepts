'use client'
import { Select } from '@radix-ui/themes'
import React from 'react'

const AssigneeSelect = () => {
  return (
    <Select.Root>
        <Select.Trigger placeholder='Assign...'/>
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
                <Select.Item value="1">Yasir Zahid</Select.Item>
                <Select.Item value="2">Zia Khan</Select.Item>
                <Select.Item value="3">Shahrukh Khan</Select.Item>
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default AssigneeSelect