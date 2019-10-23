# jsdatecalculator
<h3>Introduction</h3>

<p>Provides javascript functions to automatically calculates Start Date, End Date, and Duration from each other. Built specifically for Symfony DateTimeType field choice widgets. For example, you input start date into one symfony dateTimeType component and input duration into another dateIntervalType component, you can call this tool's updateEndFromStartDur function and it will automatically update a third dateTimeType component that represents an end date. Similarly, you can use this tools updateStartFromEndDur and updateDurFromStartEnd functions to change a start date from duration and end date or change a duration from start date and end date respectively.</p>

<h3>How to use</h3>

<p>This tool is a single javascript file. To use, download and paste into public folder or other folder that can be accesed by the twig template file or similar that makes use of the symfony dateTimeType and dateIntervalType components. As shown below, in symfony form builder function add 'LStartDate' to the class attribute of the start date dateTimeType form field in symfony; add 'LDuration' to the class attribute of the duration DateIntervalType form field; and add 'LEndDate' to the class attribute of the end date DateTimeType form field.</p>

<p>Currently, jsdatecalculator can only handle symfonys choice widgets.</p>

     $builder
            ->add('startDate', DateTimeType::class, [
                'widget'      => 'choice',
                'with_minutes'  => true,
                'with_seconds' => true,
                'attr' => ['class' => 'LStartDate']
            ])
            ->add('duration', DateIntervalType::class, [
                'widget'      => 'choice',
                'with_years'  => true,
                'with_months' => true,
                'with_days'   => true,
                'with_hours'  => true,
                'with_minutes' => true,
                'with_seconds' => true,
                'attr' => ['class' => 'LDuration']
                ])
            ->add('endDate', DateTimeType::class, [
                'widget'      => 'choice',
                'with_minutes'  => true,
                'with_seconds' => true,
                'attr' => ['class' => 'LEndDate']
            ])
           
<h3>Update 'LEndDate' from 'LStartDate' and 'LDuration' using updateFromStartDur function</h3>

<h3>How to include in form template</h3>
      
        {{form_row(form.startDate)}} <button type="button" class="btn btn-secondary" onclick="changeStartFromEndDur()">Update Start Date</button>
        {{form_row(form.duration)}}  <button type="button" class="btn btn-secondary" onclick="changeDurFromStartEnd()">Update Duration</button>                       
        {{form_row(form.endDate)}}   <button type="button" class="btn btn-secondary" onclick="changeEndFromStartDur()">Update End Date</button>


<p>To calculate the start date enter duration and end date then select the 'Update Start Date' button to calculate the new start date.</p>
<p>To calculate the duration enter start date and end date then select the 'Update Duration' button to calculate the new duration.</p>
<p>To calculate the end date enter start date and duration then select the 'Update End Date' button to calculate the new end date.</p>
     
