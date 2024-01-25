FROM python:3.9

# Set working directory
WORKDIR ./usr/api
COPY requirements.txt ./
# RUN python -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy directory to working directory
COPY ./ ./
# Run python script
CMD ["python", "app.py"]