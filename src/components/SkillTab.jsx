import { RingProgress, Text, Center, Group, Paper } from '@mantine/core';

export default function SkillTab(props){
    const data = props.data;
    const color = data.progress < 1 ? 'blue' : data.progress < 25 ? 'green' : data.progress < 50 ? 'yellow' : data.progress < 75 ? 'red' : 'purple'
    const label = data.progress < 1 ? '' : data.progress < 25 ? 'Beginner' : data.progress < 50 ? 'Intermediate' : data.progress < 75 ? 'Advanced' : 'Expert'
    const progress = data.progress < 1 ? '' : data.progress < 25 ? 25 : data.progress < 50 ? 50 : data.progress < 75 ? 75 : 100


    return(
        <Paper id="cart" withBorder className={`shadow-lg hover:shadow-xl duration-200 hover:scale-105 hover:duration-500 cursor-pointer shadow-${color}-200 hover:shadow-${color}-300`} radius="md" p="xs" key={props.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: progress, color: color}]}
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
              {label}
            </Text>
          </div>
        </Group>
        </Paper>
    )
}