import { RingProgress, Text, Center, Group, Paper } from '@mantine/core';

export default function SkillTab(props){
    const data = props.data;
    const color = data.progress < 25 ? 'blue' : data.progress < 50 ? 'green' : data.progress < 75 ? 'yellow' : data.progress < 92 ? 'red' : 'purple'

    return(
        <Paper withBorder className="shadow-inner" radius="md" p="xs" key={props.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: data.progress, color: color}]}
            label={
              <Center>  
                    <i style={{'transform': 'scale(1.4)'}} className={data.icon}></i>
              </Center>
            }
          />

          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
              {data.label}
            </Text>
            <Text weight={700} size="xl">
              {data.progress + " %"}
            </Text>
          </div>
        </Group>
        </Paper>
    )
}