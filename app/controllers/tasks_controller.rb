class TasksController < ApplicationController

  def index
    @tasks = Task.all

    respond_to do |format|
      format.html
      format.json { render json: @tasks }
    end
  end

  def create
    @task = Task.new(task_params)

    if @task.save!
      render json: @task
    end
  end

  def update
    @task = Task.find(params[:id])

    if @task.update_attributes!(task_params)
      render json: @task
    end
  end

  def destroy
    @task = Task.find(params[:id])

    if @task.destroy!
      render json: @task
    end
  end

  private

    def task_params
      params.require(:task).permit(:title, :done)
    end

end
