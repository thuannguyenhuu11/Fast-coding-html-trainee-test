import PencilIcon from '@/public/icons/pencil-icon.svg';
import ResponsiveIcon from '@/public/icons/responsive-icon.svg';
import ListIcon from '@/public/icons/list-icon.svg';
import PlaneIcon from '@/public/icons/plane-icon.svg';
import TaskCard from './TaskCard';

const taskData = [
  {
    icon: PencilIcon,
    title: 'CLEAN THEME',
    description:
      'Ut nec lorem id orci convallis porta. Donec pharetra neque eu velit dictum molestie. Duis porta gravida augue sed viverra. Quisque at nulla leo, non aliquet mi.',
  },
  {
    icon: ResponsiveIcon,
    title: 'RESPONSIVE DESIGN',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod placerat dui et tincidunt. Sed sollicitudin posuere auctor. Phasellus at ultricies nisl. Integer at leo eros.',
  },
  {
    icon: ListIcon,
    title: 'FULLY LAYERED PSD',
    description:
      ' Phasellus lobortis metus non augue sodales volutpat. Vestibulum sit amet nibh eros, hendrerit venenatis est. In vitae nulla nec purus cursus pretium sed id magna. ',
  },
  {
    icon: PlaneIcon,
    title: 'READY FOR CODING',
    description:
      'Vivamus convallis feugiat mauris sed posuere. Nam rutrum, quam quis euismod commodo, elit est porta quam, non placerat eros neque porta ante. Fusce quis odio urna.',
  },
];

const Task = () => {
  return (
    <section className="bg-greyPrimary px-5 py-[60px] xl:px-[200px] lg:px-[100px] grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-2  lg:grid-cols-4 lg:grid-rows-1 gap-10">
      {taskData.map((task, index) => (
        <TaskCard key={index} icon={task.icon} title={task.title} description={task.description} />
      ))}
    </section>
  );
};

export default Task;
